# Swagger UI-ish Web Resume
Vue 3 + Nuxt 4 web application to display resume in Swagger UI like style.

## Requirements
Node v24+

## Setup
### Install Dependencies
```bash
# if yarn is not installed
npm install -g yarn

# install dependencies
yarn install
```

### Write resume YAML
Place your resume YAML in `/content`. See `/content/.sample.yaml` for required structure.

### Configure app config
Edit `/app/app.config.ts` and add resume's locale info and name of YAML file created in `/content` to `resume.locales`.
> This maps YAML files in `/content` to Language dropdown selector on the web.

## Run and Build
```bash
# run local dev server
yarn dev

# build for deployment
yarn build
```
