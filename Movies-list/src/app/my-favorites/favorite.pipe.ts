import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'favorite'
})
// export class FavoritePipe implements PipeTransform {

//     transform(movies: any): any {
//         let filtered = [];
//         filtered = movies.filter(function (movie) {
//             if(movie.status === "favorite") {
//                 return true;
//             }
//             else {
//                 return false;
//             }
//         });
//         return filtered;
//     }

// }

export class FavoritePipe implements PipeTransform {

    transform(movies:any): any {
        let filtered = [];
        filtered = movies.filter(
            (movie) => {return movie.status === 'favorites'}
        )
        return filtered;
    }

}