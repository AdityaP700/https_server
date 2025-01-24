#!/bin/sh
#
# This script is used to run your program on CodeCrafters
#
# This runs after .codecrafters/compile.sh
#
# Learn more: https://codecrafters.io/program-interface

set -e # Exit on failure

# Remove --frozen-lockfile flag if present
bun install  # Ensure dependencies are correctly installed
exec bun run $(dirname $0)/app/main.ts "$@"
