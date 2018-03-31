/**
 * API讀取
 */


//取得列表資料

const LESSONS_URL = 'https://hiskio.com/api/v1/courses/professions?type=all&level=all&sort=latest&profession_id=1';

export default {
    getProducts(cd) {
        return fetch(LESSONS_URL)
            .then((rs) => {
                return rs.json();
            })
            .then((rs) => {
                cd(rs);
            });
    }
}


