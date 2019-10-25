import _ from 'loadsh'
import $ from 'jquery'

const dom = $('<div>')
dom.html(_.join(['dell','lee'],'------------- '))
$('body').append(dom)