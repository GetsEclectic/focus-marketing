# Project Memory for Claude

## Node.js and npm Setup

This project requires:
- Node.js: 18.20.8 || ^20.3.0 || >=22.0.0
- npm: >=9.6.5

### Update Node.js and npm locally using nvm

1. Install nvm if not already installed:
   ```bash
   curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash
   ```

2. Load nvm in current session:
   ```bash
   export NVM_DIR="$HOME/.nvm"
   [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
   ```

3. Install and use Node.js v20:
   ```bash
   nvm install 20
   nvm use 20
   ```

4. Install dependencies:
   ```bash
   npm install
   ```

### Running commands with proper versions

Always load nvm first when running npm commands:
```bash
export NVM_DIR="$HOME/.nvm" && [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" && npm install
```

Or use npx for one-off commands with specific npm version:
```bash
npx npm@9.6.5 install
```