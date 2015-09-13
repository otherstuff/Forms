export default `<!-- Multiple Radios -->
<div class="control-group">
  <label class="control-label" for="<%- id %>"><%- label %></label>
  <div class="controls"><% _.each(radios, function(radio, i){ %>
    <label class="radio" for="<%- id+'-'+i %>">
      <input type="radio" name="<%- id %>" id="<%- id+'-'+i %>" value="<%- radio %>"  <% if (i < 1) { %> checked="checked" <% } %><% if(required){ %> required="required"<% } %>>
      <%- radio %>
    </label><% }); %>
  </div>
</div>`;
