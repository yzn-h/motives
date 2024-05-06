<script lang="ts">
    import { enhance } from "$app/forms";
    import Pie from "$lib/components/Pie.svelte";

    let questionsAList = ["أحاول جاهدا مسايرة أصدقائي وأسرتي بصورة منتظمة", "أحب الجلوس في الاماكن العامة ومراقبة الناس","أشعر أن الطبيعة البشرية ساحرة بلا حدود","أنا معجب بالمتطوعين للأعمال، فهم يضحون بالكثير جدا لمساعدة الآخرين","لا يمكنني أن أحترم زميلا يمتهن مشاعر الآخرين","لا أقبل ترقية قد تؤثر على علاقاتي", "عندما افارق الحياة، أتمنى أن المقربين قد حزنوا علي"]
    let questionsBList = ["أشعر بالإثارة عندما اقوم باداء الاشياء بشكل افضل من الاخرين","اذا اعتقدت انني سافشل في شيء ما ، فانني افقد اهتمامي"," احقق نجاحا عند العمل في بيئة تنافسية", "اقوم بالحديث الى نفسي لتحفيزها ولتحسين ادائها","اهتم بالناجحين في مجالاتهم ,وأطمح اليهم ","اشعر باثارة حقيقية اذا تالق زميل لي في جانب من حياته","من المهم بالنسبة لي ان اشعر انني احسن من نفسي باستمرار"]
    let questionsCList = ["احب ان اجعل الناس يلتفون حول طريقتي في التفكير"," احب ان يذكرني الناس بالتاثير الذي احدثته في حياتهم","احيانا اتعمد مخالفة الناس كي ارى رد فعلهم","اشعر باثارة واستمتاع عندما اكون مسؤولا"," في اي تجمع عمل/موقف اجتماعي اود ان يشعر الجميع بوجودي","في كبرياء الاسود، احب ان اكون المسيطر","احترم الاقوياء واتطلع الى ان اكون مثلهم"]

    export let form;
    
    let sourcesDialog;

</script>

<body>

<div id="header" class="center backGroundColor" style=" ">
  <title> الدوافع</title>
  <h1>مرحبا بك في مقياس الدوافع الأساسية</h1>
  <button on:click={() => {sourcesDialog.showModal()}}> الحقوق والمصادر </button>
</div>

<dialog bind:this={sourcesDialog} id="sectionA">
  <button on:click={() => {sourcesDialog.close()}}>x</button>
  <a href="https://twitter.com/ARK_333333">مطور ومصمم الموقع</a>
  <p>
    المصادر:
  </p>
    <ol>
      <li>    كتاب التغيير الإيجابي في المجتمع </li>
      <li>       الدوافع الأساسية المحركة للبشر
      </li>
    </ol>
    <p> <a href="https://alentajia.com">alentajia.com</a> للمزيد زر</p>
</dialog>

{#if !form?.submitted}
<div class="center">

  <title> المقياس </title>
<form method="POST" action="?/motivesForm" use:enhance>

  <div id="motiveADIv">
    <div class="section" id="sectionA">
        {#each questionsAList as question, index}
            <label for={`a${index}`}>{question}</label>
            <select name={`list a${index}`} id={`a${index}`}>
                <option value="0">نادرا</option>
                <option value="1">أحيانا</option>
                <option value="2">غالبا</option>
            </select>
        {/each}
    </div>

    <div class="section" id="sectionB">
        {#each questionsBList as question, index}
            <label for={`b${index}`}>{question}</label>
            <select name={`list b${index}`} id={`b${index}`}>
                <option value="0">نادرا</option>
                <option value="1">أحيانا</option>
                <option value="2">غالبا</option>
            </select>
        {/each}
    </div>

    <div class="section" id="sectionC">
        {#each questionsCList as question, index}
            <label for={`c${index}`}>{question}</label>
            <select name={`list c${index}`} id={`c${index}`}>
                <option value="0">نادرا</option>
                <option value="1">أحيانا</option>
                <option value="2">غالبا</option>
            </select>
        {/each}
    </div>
</div>

    
    <button> التسليم </button>
</form>

</div>
{/if}

<div id="pieDiv" >
{#if form?.submitted}
  <title> results </title>

    <Pie data={form.data} />
    <form method="post" use:enhance action="?/redoForm">
      <button> العودة </button>
    </form>
{/if}
</div>

</body>

<style>
    /* General form styling */
    #motiveADIv {
        display: flex;
        flex-direction: column;
        gap: 30px; /* Increased space between sections for better separation */
        max-width: 600px; /* Maximum width of the form */
        margin: auto; /* Center the form */
        padding: 20px; /* Padding around the form content */
        background-color: #C4E4FF; /* Light background color */
        border-radius: 8px; /* Rounded corners */
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
    }

    /* Section styling */
   .section {
        display: flex;
        flex-direction: column;
        gap: 10px; /* Space between questions */
        padding: 20px; /* Padding inside each section for better separation */
        background-color: #ffffff; /* White background for each section */
        border-radius: 8px; /* Rounded corners for each section */
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */
        margin-bottom: 20px; /* Margin at the bottom of each section for spacing */
    }

    /* Section title */
   .section h2 {
        font-size: 20px; /* Larger font size for section titles */
        font-weight: bold; /* Bold section titles */
        margin-bottom: 10px; /* Space below the section title */
    }

    /* Label and select styling */
    label {
        font-weight: bold; /* Bold labels */
    }

    select {
        padding: 10px; /* Padding inside the select element */
        font-size: 16px; /* Larger font size for better readability */
        border: 2px solid #ccc; /* Border around the select element */
        border-radius: 4px; /* Rounded corners for the select element */
    }

    /* Button styling */
    button {
        padding: 12px 24px; /* Padding inside the button */
        font-size: 18px; /* Larger font size for the button text */
        background-color: #d895da; /* Blue background color */
        color: white; /* White text color */
        border: none; /* No border */
        border-radius: 4px; /* Rounded corners for the button */
        cursor: pointer; /* Pointer cursor on hover */
        transition: background-color 0.3s ease; /* Smooth background color change on hover */
    }

    button:hover {
        background-color: #D20062; /* Darker blue on hover */
    }


/* CSS */
#pieDiv {
  height: 40vh; /* Adjust this value as needed */
  width: 40vw; /* Adjust as needed */
  margin: auto; /* Center the div */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #C4E4FF;
}

.center{
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;

}

html, .center, body {
  background-color: #C4E4FF;
}

#header{
  background-color:#C4E4FF ;
  margin-bottom: 20px;
}

#sectionA{
  background-color:#D895DA ;
}

#sectionB{
  background-color:#D6589F ;
}

#sectionC{
  background-color:#D20062 ;
}
</style>