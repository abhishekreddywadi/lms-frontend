# LMS Frontend

### Setup instructions

1. Clone the project

```
https://github.com/abhishekreddywadi/lms-frontend.git

```

3. Move into the directory

```
  cd lms-frontend
```

3. install dependencies

```
npm install

```

4. run the server

```
npm run dev

```

### Setup instructions for tailwind

1. install tailwindcss

```
npm install -D tailwindcss postcss autoprefixer
```

2. Create tailwind config file

```
npx tailwindcss init -p

```

3. Add file extension to tailwind config file in the content property

```
"./src/**/*.{html,js,ts,jsx,tsx}"

```

4. Add the tailwind directives at the top of the `index.css` file

```
    @tailwind base;
    @tailwind components;
    @tailwind utilities;

```

### Adding plugins and dependencies

```
    npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort eslint

1.  Install simple import sort

```
    npm i -D eslint-plugin-simple-import-sort
```

2.  Add rule in `.eslint.cjs`

```
    "simple-import-sort/imports": "error",
```

3.  add simple-import-sort plugin in `.eslint.cjs`

```
    plugins: [..., "simple-import-sort"],

```

4.  To enable auto import sort on file save in vscode

    - Open `settings.json`
    - add the following config

```
    "editor.codeActonsOnSave":{
      "source.fixAll.eslint":true
    }

```
