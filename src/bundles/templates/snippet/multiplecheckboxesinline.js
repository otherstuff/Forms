export default `<!-- Multiple Checkboxes (inline) -->
<div class="control-group">
  <label class="control-label" for="<%- name %>"><%- label %></label>
  <div class="controls"><% _.each(checkboxes, function(checkbox, i){ %>
    <label class="checkbox inline" for="<%- id+'-'+i %>">
      <input type="checkbox" name="<%- id %>" id="<%- id+'-'+i %>" value="<%- checkbox %>"<% if(required){ %> required="required"<% } %>>
      <%- checkbox %>
    </label><% }); %>
  </div>
</div>`;
