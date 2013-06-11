/**
 * Created by JetBrains RubyMine.
 * User: Sharon
 * Date: 6/04/12
 * Time: 11:06 PM
 * To change this template use File | Settings | File Templates.
 */
function remove_fields(link) {
    $(link).prev("input[type=hidden]").val("1");
    $(link).closest(".fields").hide();
}

function add_fields(link, association, content) {
    var new_id = new Date().getTime();
    var regexp = new RegExp("new_" + association, "g")
    $(link).parent().before(content.replace(regexp, new_id));
}