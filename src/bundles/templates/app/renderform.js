export default `<form class="form-horizontal" <% if(multipart){ %>enctype="multipart/form-data"<% } %>>
<fieldset>

<%= text %>
</fieldset>
</form>`;
