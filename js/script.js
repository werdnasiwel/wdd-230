/*todays date and time*/
const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',

};
const
    document.getElementById ('currentdate').textContent = new Date().toLocaleDateString('en-US', options)
