export default `<!-- Appended checkbox -->
<div class="control-group">
  <label class="control-label" for="<%- id %>"><%- label %></label>
  <div class="controls">
    <div class="input-append">
      <input id="<%- id %>" name="<%- id %>" class="span2" type="text" placeholder="<%- placeholder %>" <% if(required) {%> required <% } %> />
      <span class="add-on">
        <input type="checkbox"<% if (checked){ %> checked <% } %>>
      </span>
    </div>
    <% if (helptext.length > 0) { %><p class="help-block"><%- helptext %></p><% } %>
  </div>
</div>`;
