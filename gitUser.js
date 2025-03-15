
async function getGitUser(user) {
  const response = await fetch(`https://api.github.com/users/${user}/events/public`);
  const data = await response.json();

  const mapData = new Map;

  data.forEach(element => {
    const key = element.repo.url;
    if(!mapData.has(key)){
      mapData.set(key,{
        type: element.type,
        repo: element.repo.url
      })
    }
  });

  return Array.from(mapData.values());
}

getGitUser(username).then(data => console.log(data));


