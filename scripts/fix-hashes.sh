#!/bin/bash -eu

# Appends language code to file hashes for js files
# (and references to those files) in dist/
# Motivation: https://github.com/angular/angular-cli/issues/17416

shopt -s extglob nullglob

# https://stackoverflow.com/questions/19242275/re-error-illegal-byte-sequence-on-mac-os-x
LC_CTYPE=C

# https://stackoverflow.com/a/40777793
suffixArg=()
sed --version 2>/dev/null | grep -q GNU || suffixArg=( '' )

cd ./dist/apps/fafn.ru/browser

LOCALES=($(ls))

cd "./${LOCALES[0]}"

# Find js files | extract hash | filter duplicates
# Hashes are the same for every language (this is the problem we are trying to solve)
# So we only need to do this once.
HASHES=($(find . -maxdepth 1 -name '*.js' | sed -E 's|.*\.([a-z0-9]*)\.js|\1|' | sort -u))

cd ..

for LOCALE in ${LOCALES[@]}
do
    echo "Updating file hashes for $LOCALE"
    cd "./${LOCALE}"

    # Replace occurrences of each hash.
    for HASH in ${HASHES[@]}
    do
        HASH_SUFFIXED=${HASH}_${LOCALE}
        # echo "Replacing occurrences of hash: $HASH with $HASH_SUFFIXED"
        sed -i "${suffixArg[@]}" -E "s|$HASH|$HASH_SUFFIXED|g" *.@(js|html)
    done

    # Rename files to update their hashes too.
    for FILE in *.js*
    do
        # echo "Renaming $FILE"
        mv "$FILE" "${FILE/.js/_${LOCALE}.js}"
    done

    cd ..
done
