# Starter-Kit(BaseTemplate) for Laravel8+Vue3+TS+Vuetify3+VueRouter4+Pinia

## Demo
<kbd>![ss1](https://user-images.githubusercontent.com/51684013/199225294-005562ca-06ad-43c4-9fac-964b4ff81f5f.png)</kbd>
<kbd>![ss2](https://user-images.githubusercontent.com/51684013/199225264-eab4ec38-c953-4a84-80e8-239f9aa69635.png)</kbd>



## Features
- Laravel8
- Vue3
- Typescript
- Vuetify3 beta
- VueRouter4
- Pinia
- SASS
- Material Design Icons
- Axios
- Custom Theme (Vuetify)
- 404ErrorPage (VueRouter)
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
