function contactForm(){
    const jnwEmail = 'rubinoamdeveloper@gmail.com';

    $('#contactForm').submit((e)=>{
        e.preventDefault();
        
        //User Email Variables
        let subject = e.currentTarget[0].value;
        let name = e.currentTarget[1].value;
        let emailAddress = e.currentTarget[2].value;
        let emailBody = e.currentTarget[3].value;
        console.log(subject,name,emailAddress,emailBody);
    });
}