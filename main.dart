void main(List<String> args) {
  String a = '';
  for (var i = 10; i > 0; i--) {
    for (var j = 0; j < i; j++) {
      a += '*';
    }
    a += '\n';
  }
  print(a);
}
