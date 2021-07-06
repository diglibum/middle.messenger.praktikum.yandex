const inputProfileTmpl =
    `<div class="input-profile">
        <label for="{{ name }}" class="input-profile__label">{{ text }}</label>
        <input 
            type="{{ type }}" 
            name="{{ name }}" 
            required="{{ required }}"
            value = "{{ value }}"
            class="input-profile__input" />
        <div class="input-profile__error-message hide">{{ errorMessage }}</div>
    </div>
    `;

export default inputProfileTmpl;