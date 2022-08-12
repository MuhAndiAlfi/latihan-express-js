var url = "/api/portopolio";

function getIdEdit(data){
    $("#form-edit").empty();
    var id = data

    $.ajax({
        url: url+'/'+ id,
        type: 'get',
        data: data,
        success: function (response) {
            $("#form-edit").append('<form id="editformPortopolio" method="post">'+
            '<div class="mb-3">'+
                '<label for="editInputEmail1" class="form-label">Judul</label>'+
                '<input type="text" name="title" class="form-control" id="editInputEmail1" value="'+ response.title +'" aria-describedby="emailHelp" required>'+
            '</div>'+
            '<div class="mb-3">'+
                '<label for="editInputPassword1" class="form-label">Deskripsi</label>'+
                '<textarea class="form-control" name="description" id="editFormControlTextarea1" value="" rows="3" required>'+ response.description +'</textarea>'+
            '</div>'+
            '<div class="mb-3">'+
                '<label for="formFileSm" class="form-label">Small file input edit</label>'+
                '<input class="form-control form-control-sm" name="img" id="formFileSm" type="file">'+
            '</div>'+
            '<div class="mb-3">'+
                '<label for="editInputEmail1" class="form-label">Type</label>'+
                '<input type="text" name="type" class="form-control" id="editInputEmail1" value="'+ response.type +'" aria-describedby="emailHelp" required>'+
            '</div>'+
            '<a href="#" class="btn btn-primary" id="editbtnPortopolio">submit</a>'+
        '</form>')
            // console.log(response.id)
        }
    })
}

function deleteData(data){
    var id = data
    var res = confirm("are u sure delete this?")

    if (res){
        $.ajax({
            url: url+'/'+id,
            type: 'DELETE',
            success: function (response) {
                alert('berhasil');
                window.location.reload();
            }
        })
    }else{
        window.location.reload();

    }
    
}

$(function () {
    
    $('#btnPortopolio').click(function () {
        var data = $('#formPortopolio').serialize();

        $.ajax({
            url: url,
            type: 'POST',
            data: data,
            success: function (response) {
                alert('berhasil');
                window.location.reload();
            }
        })
    })

    $('#editbtnPortopolio').click(function(){
        var data = $('#editformPortopolio').serialize();

        $.ajax({
            url: url+'/'+id,
            type: 'PUT',
            data: data,
            success: function (response) {
                alert('berhasil');
                window.location.reload();
            }
        })
    })      
})



