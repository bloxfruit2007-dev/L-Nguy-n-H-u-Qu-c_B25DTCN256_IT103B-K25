            let turn=parseInt(prompt("Hôm nay có bao nhiêu lượt mượn sách?"));
            let sum=0;
            for(let i=1;i<=turn;i++){
                console.log(`LƯỢT MƯỢN THỨ ${i}`);
                let name=prompt("Nhập tên người mượn:");
                let book=prompt("Nhập tên sách:");
                let day=parseInt(prompt("Nhập số ngày mượn (1-30):"));
                if(day>14){
                    console.log("Cảnh báo: Thời gian mượn vượt quy định (tối đa 14 ngày)");
                }else{
                    console.log("Mượn thành công");
                }
                sum++;
            }
            console.log(`Tổng số lượt mượn: ${sum}`);