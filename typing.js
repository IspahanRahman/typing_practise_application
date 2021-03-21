
        const sample=[
        "There are several types of simple sentences. Read over each type below and use the worksheet to help you practice writing your own simple sentences",
        "if you're confused about what makes a sentence simple, these 37 simple sentence examples will help clear things up.",
        "In order for a sentence to be complete, it needs two key elements — a subject and a verb. Additionally, the subject and verb must form a complete idea. That's why understanding subjects, predicates, and objects is so important.",
        "First, we’ll dive into subjects, as no sentence can exist without them. Then, we’ll discuss objects and predicates, as they are faithful followers of subject"
        ]

       const msg=document.getElementById('msg')
       const writtenWords=document.getElementById('mywords')
       const btn=document.getElementById('btn')
       let startTime,endTime

      const playGame=()=>{
           let randomNumber=Math.floor(Math.random()*sample.length)
           msg.innerText=sample[randomNumber]
           let date=new Date()
           startTime=date.getTime()
           btn.innerText="Done"
       }

       const endPlay=()=>{
           let date=new Date()
           endTime=date.getTime()
           let totalTime=((endTime-startTime)/1000)
           
           let totalstr=writtenWords.value
           let wordCount=wordCounter(totalstr)

           let speed=Math.round((wordCount/totalTime)*60)

           let finalmsg="You typed total at "+speed+" words per minute "
           finalmsg+=compareWords(msg.innerText,totalstr)
           msg.innerText=finalmsg
           document.getElementById("mywords").value = ""
       }

       const compareWords=(string1,string2)=>{
           let word1=string1.split(" ")
           let word2=string2.split(" ")
           let count=0

           word1.forEach( (item,index) => {
               if(item==word2[index]){
                   count++
               }
               
           });

           let errorWords=(word1.length - count)
           return (count+" correct out of "+word1.length+" words and the total number of errors are "+errorWords+".")
       }

       const wordCounter=(str)=>{
           let response=str.split(" ").length
           return response
       }
       btn.addEventListener('click',function(){
           if(this.innerText=='Start'){
               writtenWords.disabled=false
               playGame()
           }
           else if(this.innerText="Done"){
               writtenWords.disabled=true
               btn.innerText="Start"
               
               endPlay()
           }
       }) 
  