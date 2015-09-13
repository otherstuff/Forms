export default `<!-- Prepended text-->
<div class="control-group">
  <label class="control-label" for="<%- id %>"><%- label %></label>
  <div class="controls">
    <div class="input-prepend">
      <span class="add-on"><%- prepend %></span>
      <input id="<%- id %>" name="<%- id %>" class="<%- inputsize %>" placeholder="<%- placeholder %>" type="text"<% if(required) {%> required <% } %> />
    </div>
    <% if (helptext.length > 0) { %><p class="help-block"><%- helptext %></p><% } %>
  </div>
</div>`;
