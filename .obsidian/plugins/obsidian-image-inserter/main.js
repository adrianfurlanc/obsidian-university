/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/main.ts
__export(exports, {
  default: () => ImageInserterPlugin
});
var import_obsidian2 = __toModule(require("obsidian"));

// src/InsertModal.ts
var import_obsidian = __toModule(require("obsidian"));

// src/config.ts
var config = (app) => {
  return app.vault.config;
};
var config_default = config;

// src/InsertModal.ts
var InsertModal = class extends import_obsidian.Modal {
  constructor(plugin, editor) {
    super(plugin.app);
    this.plugin = plugin;
    this.editor = editor;
    this.fileName = "";
    this.description = "";
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.createEl("h2", { text: "Insert Image" });
    new import_obsidian.Setting(contentEl).setName("File name").setDesc("The image file name.").addText((text) => text.setPlaceholder("File name").setValue(this.fileName).onChange((value) => this.fileName = value));
    new import_obsidian.Setting(contentEl).setName("Description").setDesc("The markdown image description.").addText((text) => text.setPlaceholder("Description").setValue(this.description).onChange((value) => this.description = value));
    const inputSetting = new import_obsidian.Setting(contentEl).setName("Choose an image").setDesc("If no image is selected, an image will be pasted from the clipboard.");
    const filePicker = inputSetting.controlEl.createEl("input", {
      type: "file",
      attr: {
        accept: "image/*, video/*"
      }
    });
    filePicker.accept = "image/*";
    filePicker.onchange = () => {
      this.file = filePicker.files[0];
    };
    new import_obsidian.Setting(contentEl).addButton((button) => button.setButtonText("Save").setCta().onClick(() => __async(this, null, function* () {
      if (this.fileName.length < 1) {
        return new import_obsidian.Notice("Enter a file name");
      }
      if (config_default(this.app).attachmentFolderPath.length != 0 && !(yield this.app.vault.adapter.exists(config_default(this.app).attachmentFolderPath))) {
        yield this.app.vault.createFolder(config_default(this.app).attachmentFolderPath);
      }
      let saveFolder = this.app.vault.getAbstractFileByPath(config_default(this.app).attachmentFolderPath);
      if (!saveFolder) {
        saveFolder = this.app.vault.getRoot();
      }
      if (!saveFolder) {
        return new import_obsidian.Notice("Unknown image save location");
      }
      if (saveFolder.children.find((file) => file.basename == this.fileName)) {
        return new import_obsidian.Notice("An image with this name already exists");
      }
      if (this.file) {
        this.plugin.insertImageFromFile(this.file, this.editor, this.fileName, this.description);
      } else {
        this.plugin.insertImageFromClipboard(this.editor, this.fileName, this.description);
      }
      this.close();
    })));
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};

// src/main.ts
var MimeTypeExtensions = {
  "image/png": "png",
  "image/jpeg": "jpeg",
  "image/gif": "gif"
};
var ImageInserterPlugin = class extends import_obsidian2.Plugin {
  onload() {
    return __async(this, null, function* () {
      this.addCommand({
        id: "insert-image",
        name: "Insert image",
        editorCallback: (editor, _) => __async(this, null, function* () {
          new InsertModal(this, editor).open();
        })
      });
      this.addCommand({
        id: "insert-image-from-clipboard",
        name: "Insert image from clipboard",
        editorCallback: (editor, _) => __async(this, null, function* () {
          const date = new Date();
          this.insertImageFromClipboard(editor, `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}_${date.getHours()}.${date.getMinutes()}.${date.getSeconds()}`, "");
        })
      });
    });
  }
  insertImageFromClipboard(editor, fileName, description) {
    return __async(this, null, function* () {
      var _a, _b;
      new import_obsidian2.Notice("Pasting image...");
      let imagePath;
      let imageData;
      if (import_obsidian2.Platform.isMobileApp) {
        const clipboardContent = yield navigator.clipboard.readText();
        if (!clipboardContent || !clipboardContent.startsWith("data:image/png;base64,")) {
          return new import_obsidian2.Notice("No image found in clipboard");
        }
        const base64Image = clipboardContent.replace("data:image/png;base64,", "");
        imageData = yield (yield fetch("data:application/octet;base64," + base64Image)).arrayBuffer();
        imagePath = `${(_a = config_default(this.app).attachmentFolderPath) != null ? _a : ""}/${fileName}.png`;
      } else {
        const items = yield navigator.clipboard.read();
        if (items.length < 1) {
          return new import_obsidian2.Notice("No clipboard content found");
        }
        const imageType = items[0].types.find((type) => type.startsWith("image/"));
        if (!imageType) {
          return new import_obsidian2.Notice("No image found in clipboard");
        }
        const extension = MimeTypeExtensions[imageType];
        if (!extension) {
          return new import_obsidian2.Notice(`Unknown image mime type ${imageType}`);
        }
        imagePath = `${(_b = config_default(this.app).attachmentFolderPath) != null ? _b : ""}/${fileName}.${extension}`;
        imageData = yield (yield items[0].getType(imageType)).arrayBuffer();
      }
      this.app.vault.createBinary(imagePath, imageData);
      let selection = editor.getCursor();
      selection.ch += 2;
      editor.replaceSelection(`![${description != null ? description : ""}](${encodeURI(imagePath)})`);
      if (description.length == 0) {
        editor.setSelection(selection);
      }
      new import_obsidian2.Notice("Done!");
    });
  }
  insertImageFromFile(file, editor, fileName, description) {
    return __async(this, null, function* () {
      var _a;
      const extension = MimeTypeExtensions[file.type];
      if (!extension) {
        return new import_obsidian2.Notice(`Unknown image mime type ${file.type}`);
      }
      let imagePath = `${(_a = config_default(this.app).attachmentFolderPath) != null ? _a : ""}/${fileName}.${extension}`;
      let imageData = yield file.arrayBuffer();
      this.app.vault.createBinary(imagePath, imageData);
      editor.replaceSelection(`![${description != null ? description : ""}](${encodeURI(imagePath)})`);
      new import_obsidian2.Notice("Done!");
    });
  }
};
