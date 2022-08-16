var url = "/api/";

function addData(surl) {
    // var data = $('#form-add').serialize();
    var form = $('#form-add')[0]
    var data = new FormData(form)

    $.ajax({
        url: url + surl,
        type: 'POST',
        data: data,
        cache: false,
        contentType: false,
        processData: false,

        success: function (response) {
            alert('berhasil');
            console.log(data)
            window
                .location
                .reload()
        },
        error: function (error) {
            console.log(error);
        }
    })
}

function checkContent(type){
    var content = $('#form-edit').data('content');
    if (content == 'portopolio'){
        $('#type').append('<label for="editInputEmail1" class="form-label">Type</label>'+
        '<input type="text" name="type" class="form-control" id="editInputEmail1" value="'+ type +'" aria-describedby="emailHelp" required>'
        )
    }
}

function getIdEdit(data, surl) {
    $("#form-edit").empty();
    var id = data        

    $.ajax({
        url: url + surl + '/' + id,
        type: 'get',
        data: data,
        success: function (response) {
            
            $("#form-edit").append('<form id="editform" method="post">'+
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
            '<div class="mb-3" id="type">'+
            '</div>'+
            '<a class="btn btn-primary" id="editbtn" onclick=editData('+response.id+')>submit</a>'+
        '</form>')
        checkContent(response.type)

        }
    })
}

function editData(id) {
    var data = $('#editform').serialize();
    var surl = $('#form-edit').data('content');

    $.ajax({
        url: url + surl + '/' + id,
        type: 'PUT',
        data: data,
        success: function (response) {
            alert('berhasil');
            window
                .location
                .reload();
        }
    })

}

function deleteData(data, surl) {
    var id = data
    var res = confirm("are u sure delete this?")

    if (res) {
        $.ajax({
            url: url + surl+ '/' + id,
            type: 'DELETE',
            success: function (response) {
                alert('berhasil');
                window
                    .location
                    .reload();
            }
        })
    } else {
        window
            .location
            .reload();

    }

}
