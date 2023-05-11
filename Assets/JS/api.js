async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/BrenoVital/js-developer-portfolio/main/data/profile.json';
    const fetching = await fetch(url);
    const data = await fetching.json();
    return data;
}
