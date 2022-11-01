describe('Suite  to test classes',()=> {
    let emp=null;
    


    it('It shouldset id',()=>{
       const emp = new employee("pavan","sl@g")
       const cid=emp.valiName(emp);
        expect(true).toBe(cid)
    })
    xit('It shouldset name',()=>{
        const emp = new employee("pavan","sl")
        const cname=emp.valiName(emp);
         expect(true).toBe(cname)
     })

    xit('It should set email',()=>{
        const emp = new employee("pavan","sl@g")
        const employ=emp.valiEmail(emp);
        expect(true).toBe(employ)
     })


     it('It should set PhoneNo',()=>{
        const emp = new employee("pavan","sl@g","9481789325",500)
        const phoneNo=emp.valiPhone(emp);
        expect(true).toBe(phoneNo)
     })

     it('It should set Amount',()=>{
        const emp = new employee("pavan","sl@g","9481789325",600)
        const amount=emp.valiBillAmt(emp);
        expect(true).toBe(amount)
     })
     
    
})