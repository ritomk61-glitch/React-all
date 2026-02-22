export default function Ami() {
    let n1=document.querySelector('#k2');
    let n2=document.querySelector('#k4');

    let sum = n1.innerHTML + n2.innerHTML;


    return(
        <>
     <h1>start your calculations:</h1>
     <input type="text" placeholder="enter your 1st numbber:" id="k2"/>
     <input type="text" placeholder="enter your 2nd number:" id="k4"/>
     <button>your resutl is {sum}</button>
        </>
    );
}
