import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
// import data from "../components/data.js"

export const load = (async () => {
    return {};
}) satisfies PageServerLoad;

export const actions = {
    
	motivesForm: async (event) => {
        
        let form = await event.request.formData()
        // console.log(form)

        let listA = 0
        let listB = 0
        let listC = 0


        for (let i = 0; i < 7; i++) {
            let x = form.get(`list a${i}`)
            listA += parseInt(x)
        }

        for (let i = 0; i < 7; i++) {
            let x = form.get(`list b${i}`)
            listB += parseInt(x)
        }

        for (let i = 0; i < 7; i++) {
            let x = form.get(`list c${i}`)
            listC += parseInt(x)
        }   

        let data = {
            labels: ['الإنتماء', 'النجاح', 'النفوذ'],
            datasets: [
              {
                data: [listA,listB,listC],
                backgroundColor: [
                  '#B0C5A4',
                  '#D37676',
                  '#F1EF99',
                ],
                hoverBackgroundColor: [
                  '#FF5A5E',
                  '#5AD3D1',
                  '#FFC870',
                ],
              },
            ],
          }

        return { submitted:true, data:data }
        //redirect(300,"/results")
            // { a:listA, b:listB ,c:listC }
        // if ( listA > listB )
    },

    redoForm: () => {
        return {submitted:false}
    }

};