<br><br>

<h1>Upload a file</h1>

<form action="api/files-one" method="post" enctype="multipart/form-data">
    csrf()
    <input type="file" name="jprac">
    <button type="submit">upload</button>
</form>