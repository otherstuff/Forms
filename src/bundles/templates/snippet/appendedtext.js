export default `<!-- Appended Input-->
<div class="control-group">
  <label class="control-label" for="<%- id %>"><%- label %></label>
  <div class="controls">
    <div class="input-append">
      <input id="<%- id %>" name="<%- id %>" class="<%- inputsize %>" placeholder="<%- placeholder %>" type="text"<% if(required) {%> required <% } %> />
      <span class="add-on"><%- append %></span>
    </div>
    <% if (helptext.length > 0) { %><p class="help-block"><%- helptext %></p><% } %>
  </div>
</div>`;
