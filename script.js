function toggleParticipants(groupId) {
  const list = document.getElementById(groupId);
  if(list.style.display === 'none' || list.style.display === '') {
    list.style.display = 'block';
  } else {
    list.style.display = 'none';
  }
}