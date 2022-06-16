const myId = 'a02a3b3ee39c6fecd0523ad3';

const getMe = `{"name":"Губка Боб","about":"Квадратные штаны","avatar":"https://img2.akspic.ru/previews/5/7/1/6/6/166175/166175-gubka_bob-multfilm-multik-bikini_bottom-nikelodeon-500x.jpg","_id":"${myId}","cohort":"cohort36"}`;
const cardsList = JSON.parse(`[{"likes":[{"name":"Юджин Крабс","about":"Жадный до чертиков 🦀","avatar":"https://img.kupigolos.ru/hero/5cdde587dc4e8.png?p=bh&s=82f9de1778d41e5bb4fbb0f5443bc057","_id":"ba78031e0402196520c06f61","cohort":"cohort36"}],"_id":"62a105917714be031be19310","name":"Дорога в лесу","link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg","owner":"${myId}","createdAt":"2022-06-08T20:24:49.950Z"},{"likes":[{"name":"Amir Kerimov","about":"web developer","avatar":"https://www.goodcore.co.uk/blog/wp-content/webp-express/webp-images/uploads/2019/08/coding-vs-programming-2.jpg.webp","_id":"e1ad36315b650d44ed8934e0","cohort":"cohort36"},{"name":"Test2","about":"Test2","avatar":"https://avatars.mds.yandex.net/i?id=5b70f4706227d015548cfa6295037ed6-5291569-images-thumbs&n=13&exp=1","_id":"eba997b1990847a5babbe78b","cohort":"cohort36"}],"_id":"629fb8540c90d403271bcace","name":"Нью-Йорк","link":"https://i.pinimg.com/originals/13/37/5a/13375a62ea6c3f50f3aeeab5b5479220.jpg","owner":{"name":"Amir Kerimov","about":"web developer","avatar":"https://www.goodcore.co.uk/blog/wp-content/webp-express/webp-images/uploads/2019/08/coding-vs-programming-2.jpg.webp","_id":"e1ad36315b650d44ed8934e0","cohort":"cohort36"},"createdAt":"2022-06-07T20:43:00.907Z"},{"likes":[{"name":"йцуйцу","about":"йцуйцуй","avatar":"https://bez-makiyazha.ru/wp-content/uploads/2020/01/IMG_8406.jpg","_id":"eed7b31a2644013072f6aaa4","cohort":"cohort36"},{"name":"Renat","about":"Grief programmer","avatar":"https://images.unsplash.com/photo-1630487669407-7bee76a510c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=800&q=60","_id":"9021c80c1c93d6e5c522ee7f","cohort":"cohort36"},{"name":"Юджин Крабс","about":"Жадный до чертиков 🦀","avatar":"https://img.kupigolos.ru/hero/5cdde587dc4e8.png?p=bh&s=82f9de1778d41e5bb4fbb0f5443bc057","_id":"ba78031e0402196520c06f61","cohort":"cohort36"}],"_id":"6292dbeaaad4f80094720b52","name":"Химки","link":"https://bez-makiyazha.ru/wp-content/uploads/2020/01/IMG_8406.jpg","owner":{"name":"йцуйцу","about":"йцуйцуй","avatar":"https://bez-makiyazha.ru/wp-content/uploads/2020/01/IMG_8406.jpg","_id":"eed7b31a2644013072f6aaa4","cohort":"cohort36"},"createdAt":"2022-05-29T02:35:22.277Z"},{"likes":[{"name":"Вини Пух","about":"Любитель меда","avatar":"https://ustaliy.ru/wp-content/uploads/2019/08/83535_original.jpg","_id":"0d1cbcc370c2b39939c848a1","cohort":"cohort36"},{"name":"ouygouilgout","about":"Sailor, reseaдгещгшг","avatar":"https://mykaleidoscope.ru/uploads/posts/2021-09/1632416216_56-mykaleidoscope-ru-p-shokoladnii-tort-s-yagodami-krasivo-foto-57.jpg","_id":"6d132ade62da66cdefe938e3","cohort":"cohort36"},{"name":"Юджин Крабс","about":"Жадный до чертиков 🦀","avatar":"https://img.kupigolos.ru/hero/5cdde587dc4e8.png?p=bh&s=82f9de1778d41e5bb4fbb0f5443bc057","_id":"ba78031e0402196520c06f61","cohort":"cohort36"}],"_id":"629211b824688e004c7af70b","name":"ramos vs salah","link":"https://d20kqt4x4odakd.cloudfront.net/unsafe/2494x1350/filters:quality(100):rotate(0)/nplat-v2-assets/3yjdorwf1quh5b55xb9027f2fxq5","owner":{"name":"Вини Пух","about":"Любитель меда","avatar":"https://ustaliy.ru/wp-content/uploads/2019/08/83535_original.jpg","_id":"0d1cbcc370c2b39939c848a1","cohort":"cohort36"},"createdAt":"2022-05-28T12:12:40.345Z"},{"likes":[{"name":"Юджин Крабс","about":"Жадный до чертиков 🦀","avatar":"https://img.kupigolos.ru/hero/5cdde587dc4e8.png?p=bh&s=82f9de1778d41e5bb4fbb0f5443bc057","_id":"ba78031e0402196520c06f61","cohort":"cohort36"}],"_id":"628b45989f428e0012d4cb0d","name":"Игра кальмаров","link":"https://thumbs.dfs.ivi.ru/storage8/contents/0/9/043599e4c9a5c787970a2c70f7f629.jpg","owner":{"name":"fffffff","about":"ТОПrerer","avatar":"https://thumbs.dfs.ivi.ru/storage8/contents/0/9/043599e4c9a5c787970a2c70f7f629.jpg","_id":"1a1ff672932b1226d932b15e","cohort":"cohort36"},"createdAt":"2022-05-23T08:28:08.353Z"},{"likes":[{"name":"Мастер Левша","about":"Мебель на заказ","avatar":"https://proprikol.ru/wp-content/uploads/2020/04/krasivye-kartinki-vysokogo-razresheniya-3.jpg","_id":"b10f66f38225755fbe04514b","cohort":"cohort36"},{"name":"fffffff","about":"ТОПrerer","avatar":"https://thumbs.dfs.ivi.ru/storage8/contents/0/9/043599e4c9a5c787970a2c70f7f629.jpg","_id":"1a1ff672932b1226d932b15e","cohort":"cohort36"},{"name":"Елена Васильевна","about":"Логист-минутка","avatar":"https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg","_id":"0ee15ee69cb160c2cb43b8f3","cohort":"cohort36"},{"name":"Amir Kerimov","about":"web developer","avatar":"https://www.goodcore.co.uk/blog/wp-content/webp-express/webp-images/uploads/2019/08/coding-vs-programming-2.jpg.webp","_id":"e1ad36315b650d44ed8934e0","cohort":"cohort36"}],"_id":"62851bdd224b4c00271e3101","name":"Красиво","link":"https://proprikol.ru/wp-content/uploads/2020/04/krasivye-kartinki-vysokogo-razresheniya-3.jpg","owner":{"name":"Мастер Левша","about":"Мебель на заказ","avatar":"https://proprikol.ru/wp-content/uploads/2020/04/krasivye-kartinki-vysokogo-razresheniya-3.jpg","_id":"b10f66f38225755fbe04514b","cohort":"cohort36"},"createdAt":"2022-05-18T16:16:29.416Z"},{"likes":[{"name":"Мастер Левша","about":"Мебель на заказ","avatar":"https://proprikol.ru/wp-content/uploads/2020/04/krasivye-kartinki-vysokogo-razresheniya-3.jpg","_id":"b10f66f38225755fbe04514b","cohort":"cohort36"},{"name":"fffffff","about":"ТОПrerer","avatar":"https://thumbs.dfs.ivi.ru/storage8/contents/0/9/043599e4c9a5c787970a2c70f7f629.jpg","_id":"1a1ff672932b1226d932b15e","cohort":"cohort36"},{"name":"Вини Пух","about":"Любитель меда","avatar":"https://ustaliy.ru/wp-content/uploads/2019/08/83535_original.jpg","_id":"0d1cbcc370c2b39939c848a1","cohort":"cohort36"}],"_id":"6284baaa8f615f0019ea4e7a","name":"классика","link":"https://sun9-82.userapi.com/s/v1/if1/VAjQCLv7g9DyT64TKmo-36uE9ztZYumqWhgyXTjNpWLpoo9AICcFOiBbcWdhfmJNQe_wu1U_.jpg?size=1344x1008&quality=96&type=album","owner":{"name":"Мастер Левша","about":"Мебель на заказ","avatar":"https://proprikol.ru/wp-content/uploads/2020/04/krasivye-kartinki-vysokogo-razresheniya-3.jpg","_id":"b10f66f38225755fbe04514b","cohort":"cohort36"},"createdAt":"2022-05-18T09:21:46.133Z"},{"likes":[{"name":"Мастер Левша","about":"Мебель на заказ","avatar":"https://proprikol.ru/wp-content/uploads/2020/04/krasivye-kartinki-vysokogo-razresheniya-3.jpg","_id":"b10f66f38225755fbe04514b","cohort":"cohort36"},{"name":"Кусss","about":"kusawsdadasdawdaada a2dasdaw dawd","avatar":"https://images.unsplash.com/photo-1650226538685-8762283ab443?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80","_id":"2c70aba5c06521bf6d128786","cohort":"cohort36"},{"name":"Amir Kerimov","about":"web developer","avatar":"https://www.goodcore.co.uk/blog/wp-content/webp-express/webp-images/uploads/2019/08/coding-vs-programming-2.jpg.webp","_id":"e1ad36315b650d44ed8934e0","cohort":"cohort36"}],"_id":"6284ba35ec3666004090ccbf","name":"кухня","link":"https://sun9-10.userapi.com/s/v1/if1/ktwuB1tVVWXbJFJKT_gNOTvqtJcA2hbe4OCZOdUCW5R7OM0fQeQszmeCQ7lSFYEHdg-SpW4m.jpg?size=1344x1008&quality=96&type=album","owner":{"name":"Мастер Левша","about":"Мебель на заказ","avatar":"https://proprikol.ru/wp-content/uploads/2020/04/krasivye-kartinki-vysokogo-razresheniya-3.jpg","_id":"b10f66f38225755fbe04514b","cohort":"cohort36"},"createdAt":"2022-05-18T09:19:49.243Z"},{"likes":[{"name":"Мастер Левша","about":"Мебель на заказ","avatar":"https://proprikol.ru/wp-content/uploads/2020/04/krasivye-kartinki-vysokogo-razresheniya-3.jpg","_id":"b10f66f38225755fbe04514b","cohort":"cohort36"},{"name":"fffffff","about":"ТОПrerer","avatar":"https://thumbs.dfs.ivi.ru/storage8/contents/0/9/043599e4c9a5c787970a2c70f7f629.jpg","_id":"1a1ff672932b1226d932b15e","cohort":"cohort36"},{"name":"Юджин Крабс","about":"Жадный до чертиков 🦀","avatar":"https://img.kupigolos.ru/hero/5cdde587dc4e8.png?p=bh&s=82f9de1778d41e5bb4fbb0f5443bc057","_id":"ba78031e0402196520c06f61","cohort":"cohort36"}],"_id":"6284b8a2224b4c00271da43e","name":"Шарик","link":"https://sun9-62.userapi.com/s/v1/if1/Z9Y92IKSjcA3WunG8g8_nezMrgFYmtlmdkTZqKLupBVMq9nusS7Wjy9JXNH_GIbyvTKmOg.jpg?size=450x415&quality=96&type=album","owner":{"name":"Мастер Левша","about":"Мебель на заказ","avatar":"https://proprikol.ru/wp-content/uploads/2020/04/krasivye-kartinki-vysokogo-razresheniya-3.jpg","_id":"b10f66f38225755fbe04514b","cohort":"cohort36"},"createdAt":"2022-05-18T09:13:06.019Z"}]`);
const changeAvatar = '{"name":"  уу","about":"  уу","avatar":"https://img2.akspic.ru/previews/5/7/1/6/6/166175/166175-gubka_bob-multfilm-multik-bikini_bottom-nikelodeon-500x.jpg","_id":"a02a3b3ee39c6fecd0523ad3","cohort":"cohort36"}';
const changeProfile = `{"name":"Пау пау","about":"Помпомпом","avatar":"https://img2.akspic.ru/previews/5/7/1/6/6/166175/166175-gubka_bob-multfilm-multik-bikini_bottom-nikelodeon-500x.jpg","_id":"${myId}","cohort":"cohort36"}`;
const setLike = '{"likes":[{"name":"Юджин Крабс","about":"Жадный до чертиков 🦀","avatar":"https://img.kupigolos.ru/hero/5cdde587dc4e8.png?p=bh&s=82f9de1778d41e5bb4fbb0f5443bc057","_id":"ba78031e0402196520c06f61","cohort":"cohort36"},{"name":"Пау пау","about":"Помпомпом","avatar":"https://img2.akspic.ru/previews/5/7/1/6/6/166175/166175-gubka_bob-multfilm-multik-bikini_bottom-nikelodeon-500x.jpg","_id":"a02a3b3ee39c6fecd0523ad3","cohort":"cohort36"}],"_id":"62a104f80c90d403271ee6f7","name":"ry","link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg","owner":{"name":"gng","about":"ng","avatar":"https://images.pexels.com/photos/10564999/pexels-photo-10564999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","_id":"72ec8c8f689b96c126eb9243","cohort":"cohort36"},"createdAt":"2022-06-08T20:22:16.347Z"}';
const unsetLike = '{"likes":[{"name":"Юджин Крабс","about":"Жадный до чертиков 🦀","avatar":"https://img.kupigolos.ru/hero/5cdde587dc4e8.png?p=bh&s=82f9de1778d41e5bb4fbb0f5443bc057","_id":"ba78031e0402196520c06f61","cohort":"cohort36"}],"_id":"62a104f80c90d403271ee6f7","name":"ry","link":"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg","owner":{"name":"gng","about":"ng","avatar":"https://images.pexels.com/photos/10564999/pexels-photo-10564999.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500","_id":"72ec8c8f689b96c126eb9243","cohort":"cohort36"},"createdAt":"2022-06-08T20:22:16.347Z"}';


class DemoApi {
    constructor(cards) {
        this._cardsList = [...cards];
    }

    setToken(token) {

    }

    getInitialCards() {
        return Promise.resolve(this._cardsList);
    }

    addCard({ place, link }) {
        const cardId = Math.floor(Math.random()*899999999) + 100000000;
        const obj = { likes: [], name: place, link, owner: myId, _id: cardId }
        this._cardsList = [obj, ...this._cardsList];
//        this._cardsList.push(obj);
        console.log(obj, this._cardsList);
        return Promise.resolve({...obj});
    }

    deleteCard(cardId) {
        return Promise.resolve();
    }

    likeCard(cardId, set) {
        return Promise.resolve(JSON.parse(set ? setLike : unsetLike));
    }

    getUserInfo() {
        return Promise.resolve(JSON.parse(getMe));
    }

    setUserInfo({ name, about }) {
        const url = `${this._baseUrl}/users/me`;
        const params = {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ name, about })
        };
        return this._makeRequest(url, params);
    }

    setAvatar(avatar) {
        const url = `${this._baseUrl}/users/me/avatar`;
        const params = {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({ avatar }),
        };
        return this._makeRequest(url, params);
    }

    _makeRequest(url, params) {
        return this._mode === 'demo' ?
            this._customFetch(url, params)
            : fetch(url, params)
                .then(response => response.ok ? response.json() : Promise.reject({ errorCode: response.status, errorText: response.statusText }));
    }
}

export const demoApi = new DemoApi(cardsList);
