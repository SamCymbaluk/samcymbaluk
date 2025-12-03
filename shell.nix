{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = with pkgs; [
    nodejs_20
    nodePackages_latest."@angular/cli"
    chromium
  ];

  shellHook = ''
    export NPM_CONFIG_PREFIX="$PWD/.npm-global"
    mkdir -p "$NPM_CONFIG_PREFIX"
    export PATH="$NPM_CONFIG_PREFIX/bin:$PATH"
  '';
}

