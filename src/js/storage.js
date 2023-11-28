function saveToLocal(key, value) {
  let storageValues = [];
  try {
    const existingData = loadFromLocal(key);

    if (existingData) {
      if (!existingData.includes(value)) {
        storageValues = [...existingData, value];
      } else {
        return;
      }
    } else {
      storageValues = [value];
    }

    localStorage.setItem(key, JSON.stringify(storageValues));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

function loadFromLocal(key) {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? [] : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

function removeFromLocal(key, value) {
  
  try {
    
    let existingData = loadFromLocal(key);

    const index = existingData.indexOf(value);
    existingData.splice(index, 1);

    localStorage.setItem(key, JSON.stringify(existingData));
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

export { saveToLocal, loadFromLocal, removeFromLocal };