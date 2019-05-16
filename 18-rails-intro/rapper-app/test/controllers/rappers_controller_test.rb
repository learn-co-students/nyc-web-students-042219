require 'test_helper'

class RappersControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get rappers_index_url
    assert_response :success
  end

  test "should get new" do
    get rappers_new_url
    assert_response :success
  end

  test "should get create" do
    get rappers_create_url
    assert_response :success
  end

  test "should get edit" do
    get rappers_edit_url
    assert_response :success
  end

  test "should get update" do
    get rappers_update_url
    assert_response :success
  end

  test "should get delete" do
    get rappers_delete_url
    assert_response :success
  end

end
