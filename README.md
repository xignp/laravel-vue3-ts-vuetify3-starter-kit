# Starter-Kit(BaseTemplate) for Laravel8+Vue3+TS+Vuetify3+VueRouter4+Vuex4

## Demo
<kbd>![ss1](https://user-images.githubusercontent.com/51684013/198862762-93bb9c29-073f-43b9-a999-c093c74c55e3.png)</kbd>
<kbd>![ss2](https://user-images.githubusercontent.com/51684013/198862763-09ef701c-d50e-44de-8566-4187aeb843e6.png)</kbd>


## Features
- Laravel8
- Vue3
- Typescript
- Vuetify3 beta
- VueRouter4
- Vuex4
- SASS
- Material Design Icons
- Axios
- Example Header and Footer Component

## Get Started
1. Install packages.
```
composer install
```
```
npm install
```
2. Create .env file
```
cp .env.example .env
```
3. Generate hash key
```
php artisan key:generate
```
4. Clear cash
```
php artisan config:cache
```
5. Run dev server
```
php artisan serve
```
```
npm run watch
```

## Axios Plugin

You can use existing axios instance if you need to fetch api.

**resources/js/plugins/api.ts**
```js:plugin.js
import axios from 'axios'

const api = axios.create({
  baseURL: process.env.MIX_API_BASE_URL,
  // withCredentials: true,
})

export default api
```

**Fetch Sample**
```js
import api from '../plugins/api'
const getUser = async () => {
  try {
    const response = await api.get('/user')
    console.log(response.data)
  } catch (e) {
    console.log(e)
  }
}
```
## Contributing

Please fork and pull request to main branch when you need new features or find bugs.

## License

This is open-sourced software licensed under the [MIT license](https://opensource.org/licenses/MIT).
