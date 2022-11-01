class employee{
    constructor(name,email,phone,amt){
        this.name=name;
        this.email=email;
        this.phone=phone;
        this.amt=amt;
        
        
    }

    display(){
        return this.name;
    };

    valiName(emp){
        name=emp.name;
        var letters = /^[A-Za-z]+$/;
        var lengthof=name.length;
        //console.log(len)
        if(name.match(letters) && (lengthof>=5) )
        {
            return true;
           }
         else
           {
           alert("message");
           return false;
           }
    }

    valiEmail(emp){
        var email=emp.email;
        var mailformat= /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
          if (email.match(mailformat))
           {
             return true
            }
             return (false)

            }
    valiPhone(emp){
            var phone=emp.phone;
            var phoneFor=/^\d{10}$/;
            if (phone.match(phoneFor))
            {
                return true
            }
                return (false)

    }
    valiBillAmt(emp){
            var amt=emp.amt;
        console.log(amt)
          if (amt>=500)
            {
             return true
            }
         return (false)

    }

            

}