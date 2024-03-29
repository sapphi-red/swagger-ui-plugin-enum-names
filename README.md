# swagger-ui-plugin-enum-names

![image](https://user-images.githubusercontent.com/49056869/108408793-d6275800-7268-11eb-867e-c456586bfc5a.png)

A plugin for Swagger UI to show `x-enum-varnames` / `x-enumNames` and `x-enum-descriptions`.

`x-enum-varnames`/`x-enum-descriptions` are supported by [openapi-generator](https://github.com/OpenAPITools/openapi-generator) ([docs](https://github.com/OpenAPITools/openapi-generator/blob/master/docs/templating.md#enum)).  
Also `x-enumNames` is supported by [NSwag](https://github.com/RicoSuter/NSwag) ([docs](https://github.com/RicoSuter/NJsonSchema/wiki/Enums)).

## Usage
### With npm
```shell
$ npm i swagger-ui-plugin-enum-names
```

Pass this plugin to options.
```js
const { EnumNamesPlugin } = require('swagger-ui-plugin-enum-names')

SwaggerUI({
  plugins: [
    EnumNamesPlugin
  ]
})
```
And import `swagger-ui-plugin-enum-names/dist/index.css` in some way.

### With unpkg
```html
<link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-dist/swagger-ui.css" />
<link rel="stylesheet" type="text/css" href="https://unpkg.com/swagger-ui-plugin-enum-names/dist/index.css" />

<script src="https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js"></script>
<script src="https://unpkg.com/swagger-ui-plugin-enum-names"></script>

<script>
window.onload = () => {
  SwaggerUIBundle({
    plugins: [
      EnumNamesPlugin.EnumNamesPlugin
    ]
  })
}
</script>
```
