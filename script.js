function takeInput(event){
    event.preventDefault()  
    const name=document.getElementById('name').value
    console.log(name)
    const text=document.getElementById('text').value
    const p1=document.createElement('p')
    const p2=document.createElement('p')
    p1.textContent=name + (text.toLowerCase() === 'yes' ? "":" didn't")+ " liked the song"

   // Append below the form instead of at the very bottom of the page
    document.querySelector('.formContainer').appendChild(p1);

    // Optional: clear inputs after submission
    document.getElementById('name').value = '';
    document.getElementById('text').value = '';

}
