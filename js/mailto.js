function SendMail()
{
    var body = document.getElementById("Message").value;
    var SubjectLine = document.getElementById("Subject").value;
    window.location.href = "mailto:info@jinrensz.com?subject="+SubjectLine+"&body="+body;
}