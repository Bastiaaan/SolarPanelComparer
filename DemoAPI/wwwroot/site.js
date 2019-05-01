const uri = "api/todo/";
const dataType = 'application/json';
let todos = null;
function getCount(data) {
    const el = $("#counter");
    let name = "to-do";
    if (data) {
        if (data > 1) {
            name = "to-dos";
        }
        el.text(data + " " + name);
    } else {
        el.text("No " + name);
    }
}

$(document).ready(function () {
    getData();
    $('#add-name').change(function () {
        var data = $('form').serialize();

        const item = {
            Name: $("#add-name").val().trim(),
            IsComplete: false,
            Id: 0
        };

        $.ajax({
            type: 'POST',
            url: uri,
            dataType: 'json',
            contentType: dataType,
            data: JSON.stringify(item),
            error: function () {
                alert(this.data);
            },
            success: function (result) {
                getData();
                $("#add-name").val("");
            }
        });
    });
});

function getData() {
    $.ajax({
        type: "GET",
        url: uri,
        cache: false,
        success: function (data) {
            const tBody = $("#todos");

            $(tBody).empty();

            getCount(data.length);

            $.each(data, function (key, item) {
                const tr = $("<tr></tr>")
                    .append(
                        $("<td></td>").append(
                            $("<input/>", {
                                type: "checkbox",
                                disabled: true,
                                checked: item.isComplete
                            })
                        )
                    )
                    .append($("<td></td>").text(item.name))
                    .append(
                    $("<td></td>").append(
                        $("<button>Edit</button>").on("click", function () {
                            editItem(item.id);
                        })
                      )
                    )
                    .append(
                    $("<td></td>").append(
                        $("<button>Delete</button>").on("click", function () {
                            deleteItem(item);
                        })
                    )
                );

                tr.appendTo(tBody);
            });

            todos = data;
        }
    });
}

function addItem() {

    var data = $('form').serialize();

    const item = {
        Name: $("#add-name").val().trim(),
        IsComplete: false,
        Id: 0
    };

    $.ajax({
        type: 'POST',
        url: uri,
        dataType: 'json',
        contentType: dataType,
        data: JSON.stringify(item),
        error: function () {
            alert(this.data);
        },
        success: function (result) {
            getData();
            $("#add-name").val("");
        }
    });
}

function deleteItem(item) {
    $.ajax({
        url: uri,
        type: "DELETE",
        contentType: dataType,
        dataType: 'json',
        data: JSON.stringify(item),
        success: function (result) {
            getData();
        }
    });
}

function editItem(id) {
    $.each(todos, function (key, item) {
        if (item.id === id) {
            $("#edit-name").val(item.name);
            $("#edit-id").val(item.id);
            $("#edit-isComplete").checked = item.isComplete;
        }
    });
    $("#spoiler").css({ display: "block" });
}

$(".my-form").on("submit", function () {
    const item = {
        name: $("#edit-name").val(),
        isComplete: document.getElementById("edit-isComplete").checked,
        id: $("#edit-id").val()
    };

    $.ajax({
        url: uri,
        type: "PUT",
        contentType: dataType,
        dataType: 'json',
        data: JSON.stringify(item),
        success: function (result) {
            getData();
        }
    });

    closeInput();
    return false;
});

function closeInput() {
    $("#spoiler").css({ display: "none" });
}