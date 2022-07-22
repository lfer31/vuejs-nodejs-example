# vuejs-nodejs-example
Example Project to demonstrate how to use Vue.js with nodejs backend

## Cambios
en server.js cambiar lo siguiente:
``` javascript
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, '../my-app/dist')))

app.get('/', (req, res) => {
  console.log('get')
  console.log(path.join(__dirname, '../my-app/dist'))
  res.sendFile(path.join(__dirname, '../my-app/dist/index.html'))
})

```
