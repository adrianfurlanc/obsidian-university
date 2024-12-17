#!/bin/zsh

# Run sed on all markdown files in current directory
for file in ./*.md(.); do
    sed -i '' '
        /\_Summary/{
            N
            /Summary.*\n[[:space:]]*$/d
        }
    ' $file
done

