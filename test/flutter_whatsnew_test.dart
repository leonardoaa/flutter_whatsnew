import 'package:test/test.dart';

import 'package:flutter_whatsnew/flutter_whatsnew.dart';

void main() {
  test('Check for Null', () {
    final widget = new WhatsNewPage();
    expect(widget.buttonText, !null);
  });
}
