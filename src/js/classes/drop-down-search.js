import CocktailAPI from "./cocktailAPI";
// const data = [
//   'Afghanistan',
//   'Albania',
//   'Algeria',
//   'American Samoa',
//   'Andorra',
//   'Angola',
//   'Anguilla',
//   'Antigua and Barbuda',
//   'Argentina',
//   'Armenia',
//   'Aruba',
//   'Australia',
//   'Austria',
//   'Azerbaijan',
//   'Bangladesh',
//   'Barbados',
//   'Bahamas',
//   'Bahrain',
//   'Belarus',
//   'Belgium',
//   'Belize',
//   'Benin',
//   'Bermuda',
//   'Bhutan',
//   'Bolivia',
//   'Bosnia and Herzegovina',
//   'Botswana',
//   'Brazil',
//   'British Indian Ocean Territory',
//   'British Virgin Islands',
//   'Brunei Darussalam',
//   'Bulgaria',
//   'Burkina Faso',
//   'Burma',
//   'Burundi',
//   'Cambodia',
//   'Cameroon',
//   'Canada',
//   'Cape Verde',
//   'Cayman Islands',
//   'Central African Republic',
//   'Chad',
//   'Chile',
//   'China',
//   'Christmas Island',
//   'Cocos (Keeling) Islands',
//   'Colombia',
//   'Comoros',
//   'Congo-Brazzaville',
//   'Congo-Kinshasa',
//   'Cook Islands',
//   'Costa Rica',
//   'Croatia',
//   'Cura?ao',
//   'Cyprus',
//   'Czech Republic',
//   'Denmark',
//   'Djibouti',
//   'Dominica',
//   'Dominican Republic',
//   'East Timor',
//   'Ecuador',
//   'El Salvador',
//   'Egypt',
//   'Equatorial Guinea',
//   'Eritrea',
//   'Estonia',
//   'Ethiopia',
//   'Falkland Islands',
//   'Faroe Islands',
//   'Federated States of Micronesia',
//   'Fiji',
//   'Finland',
//   'France',
//   'French Guiana',
//   'French Polynesia',
//   'French Southern Lands',
//   'Gabon',
//   'Gambia',
//   'Georgia',
//   'Germany',
//   'Ghana',
//   'Gibraltar',
//   'Greece',
//   'Greenland',
//   'Grenada',
//   'Guadeloupe',
//   'Guam',
//   'Guatemala',
//   'Guernsey',
//   'Guinea',
//   'Guinea-Bissau',
//   'Guyana',
//   'Haiti',
//   'Heard and McDonald Islands',
//   'Honduras',
//   'Hong Kong',
//   'Hungary',
//   'Iceland',
//   'India',
//   'Indonesia',
//   'Iraq',
//   'Ireland',
//   'Isle of Man',
//   'Israel',
//   'Italy',
//   'Jamaica',
//   'Japan',
//   'Jersey',
//   'Jordan',
//   'Kazakhstan',
//   'Kenya',
//   'Kiribati',
//   'Kuwait',
//   'Kyrgyzstan',
//   'Laos',
//   'Latvia',
//   'Lebanon',
//   'Lesotho',
//   'Liberia',
//   'Libya',
//   'Liechtenstein',
//   'Lithuania',
//   'Luxembourg',
//   'Macau',
//   'Macedonia',
//   'Madagascar',
//   'Malawi',
//   'Malaysia',
//   'Maldives',
//   'Mali',
//   'Malta',
//   'Marshall Islands',
//   'Martinique',
//   'Mauritania',
//   'Mauritius',
//   'Mayotte',
//   'Mexico',
//   'Moldova',
//   'Monaco',
//   'Mongolia',
//   'Montenegro',
//   'Montserrat',
//   'Morocco',
//   'Mozambique',
//   'Namibia',
//   'Nauru',
//   'Nepal',
//   'Netherlands',
//   'New Caledonia',
//   'New Zealand',
//   'Nicaragua',
//   'Niger',
//   'Nigeria',
//   'Niue',
//   'Norfolk Island',
//   'Northern Mariana Islands',
//   'Norway',
//   'Oman',
//   'Pakistan',
//   'Palau',
//   'Panama',
//   'Papua New Guinea',
//   'Paraguay',
//   'Peru',
//   'Philippines',
//   'Pitcairn Islands',
//   'Poland',
//   'Portugal',
//   'Puerto Rico',
//   'Qatar',
//   'R?union',
//   'Romania',
//   'Russia',
//   'Rwanda',
//   'Saint Barth?lemy',
//   'Saint Helena',
//   'Saint Kitts and Nevis',
//   'Saint Lucia',
//   'Saint Martin',
//   'Saint Pierre and Miquelon',
//   'Saint Vincent',
//   'Samoa',
//   'San Marino',
//   'S?o Tom? and Pr?ncipe',
//   'Saudi Arabia',
//   'Senegal',
//   'Serbia',
//   'Seychelles',
//   'Sierra Leone',
//   'Singapore',
//   'Sint Maarten',
//   'Slovakia',
//   'Slovenia',
//   'Solomon Islands',
//   'Somalia',
//   'South Africa',
//   'South Georgia',
//   'South Korea',
//   'Spain',
//   'Sri Lanka',
//   'Sudan',
//   'Suriname',
//   'Svalbard and Jan Mayen',
//   'Sweden',
//   'Swaziland',
//   'Switzerland',
//   'Syria',
//   'Taiwan',
//   'Tajikistan',
//   'Tanzania',
//   'Thailand',
//   'Togo',
//   'Tokelau',
//   'Tonga',
//   'Trinidad and Tobago',
//   'Tunisia',
//   'Turkey',
//   'Turkmenistan',
//   'Turks and Caicos Islands',
//   'Tuvalu',
//   'Uganda',
//   'Ukraine',
//   'United Arab Emirates',
//   'United Kingdom',
//   'United States',
//   'Uruguay',
//   'Uzbekistan',
//   'Vanuatu',
//   'Vatican City',
//   'Vietnam',
//   'Venezuela',
//   'Wallis and Futuna',
//   'Western Sahara',
//   'Yemen',
//   'Zambia',
//   'Zimbabwe',
// ];
const itemForDropDown = new CocktailAPI;
let data = [];

async function getAllCocktailsNames() {
  try {
    const totalCount = await itemForDropDown.fetchTotalCountCocktails();
    const resp = await itemForDropDown.fetchRandomCocktailsNames(totalCount);
    resp.forEach(el => data.push(el))
  } catch (error) {
    console.log(error);
  }
}

getAllCocktailsNames()

class DropDownList {
  constructor({ element, data }) {
    this.element = element;
    this.data = data;

    this.listElement = null;

    this._onElementInput = this._onElementInput.bind(this);
    this._onItemListClick = this._onItemListClick.bind(this);

    this._onDocumentKeyDown = this._onDocumentKeyDown.bind(this);

    this.bind();
  }

  _onDocumentKeyDown({ keyCode }) {
    // console.log(keyCode);
  }

  _onElementInput({ target }) {
    this.removeList();

    if (!target.value) {
      return;
    }

    this.createList(
      this.data.filter(
        it => it.toLowerCase().indexOf(target.value.toLowerCase()) !== -1
      )
    );
    this.appendList();
  }

  _onItemListClick({ target }) {
    this.element.value = target.textContent;
    this.removeList();
  }

  createList(data) {
    this.listElement = document.createElement(`ul`);
    this.listElement.className = `drop-down__list`;
    this.listElement.innerHTML = data
      .map(it => `<li tabindex="0" class="drop-down__item">${it}</li>`)
      .join(``);

    [...this.listElement.querySelectorAll(`.drop-down__item`)].forEach(it => {
      it.addEventListener(`click`, this._onItemListClick);
    });

    document.addEventListener(`keydown`, this._onDocumentKeyDown);
  }

  appendList() {
    const { left, width, bottom } = this.element.getBoundingClientRect();
    this.listElement.style.width = width + `px`;
    this.listElement.style.left = left + `px`;
    this.listElement.style.top = bottom + `px`;
    document.body.appendChild(this.listElement);
  }

  removeList() {
    if (this.listElement) {
      this.listElement.remove();
      this.listElement = null;
    }

    document.removeEventListener(`keydown`, this._onDocumentKeyDown);
  }

  bind() {
    this.element.addEventListener(`input`, this._onElementInput);
  }
}

new DropDownList({ element: document.querySelector(`#input`), data });

