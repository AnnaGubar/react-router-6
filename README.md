- _exact_ больше не обязательный, теперь такое поведение по дефолту
- _<Outlet/>_ отметка где будет находиться остальная разметка

Компонент _Layout.js_ - как общая обертка для дочерних компонентов в котором
располагается мы можем что-то динамически менять, в нем расположен <Outlet/> где
отрисовывается все дочернее содержимое. Если два компонента работают по одному
адресу, первому ставим `path="адрес"`, второму `index` вместо адреса.

- для определения активного состояния ссылки
  `className={({isActive}) => isActive ? 'active-link' : 'link'}`

### Подсказки по хукам

Зажать ctrl и кликнуть на хук

- Cxоздание кастомного компонента CustomLink.js (используется _useMatch_)
- _SinglePage.js_ работа с _useParams_, _useNavigate_

# Переадресация (Navigate)

1`<Route path="about" element={<AboutPage />} />`
2`<Route path="about-us" element={<Navigate to="/about" replace/>} />` вторая
строка это переадресация на первую

# Авторизация пользователя

- _RequireAuth.js_ проверка на авторизацию/переадресация
- _LoginPage.js_ страничка авторизации
- _BlogPage.js_ реализация строки поиска
  - _SearchParams_ - пара-ры с адресной строки, методы *get* *has*
- _BlogFilter.js_ - управляемая форма
