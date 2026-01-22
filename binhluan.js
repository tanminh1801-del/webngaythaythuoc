function addComment() {
    let text = document.getElementById("commentText").value;

    if (text.trim() === "") {
        alert("Vui lòng nhập nội dung bình luận");
        return;
    }

    let commentBox = document.createElement("div");
    commentBox.className = "comment";
    commentBox.innerText = text;

    document.getElementById("comment-list").appendChild(commentBox);

    document.getElementById("commentText").value = "";
}