export default `<!-- Password input-->
<div class="control-group">
  <label class="control-label" for="<%- id %>"><%- label %></label>
  <div class="controls">
    <input id="<%- id %>" name="<%- id %>" type="password" placeholder="<%- placeholder %>" class="<%- inputsize %>" <% if(required) {%> required <% } %> />
    <% if (helptext.length > 0) { %><p class="help-block"><%- helptext %></p><% } %>
  </div>
</div>`;
