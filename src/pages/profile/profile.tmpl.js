import noAvatar from 'url:./noAvatar.svg';

const profilePageTmpl =
    `
    <div class="profile-page">
        <div class="profile-page__aside">
        <button class="arrow-button"><-</button>
        </div>
        <div class="profile-page__content">
            <div class="profile-page__content-container">
            <div class="profile-page__avatar">
                <img src="${noAvatar}" alt="Аватар" class="profile-page__avatar-img">
                <div class="profile-page__avatar-overlay">Поменять аватар</div>
            </div>
            <h1 class="profile-page__header">{{ header }}</h1>
                {{ content }}
            </div>
        </div>
    </div>
`;


export default profilePageTmpl;