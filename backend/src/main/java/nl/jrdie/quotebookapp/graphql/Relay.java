package nl.jrdie.quotebookapp.graphql;

import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Base64;
import java.util.List;
import java.util.Objects;

public final class Relay {

  private static final Base64.Encoder E = Base64.getUrlEncoder().withoutPadding();
  private static final Base64.Decoder D = Base64.getUrlDecoder();

  private Relay() {}

  public static String toGlobalId(String type, long id) {
    return E.encodeToString((type + ":" + id).getBytes(StandardCharsets.UTF_8));
  }

  public static long extractIdAndAssertType(String globalId, String expectedType) {
    String decoded = new String(D.decode(globalId), StandardCharsets.UTF_8);
    String[] parts = decoded.split(":", 2);
    long id = Long.parseLong(parts[1]);
    if (!Objects.equals(parts[0], expectedType)) {
      throw new IllegalArgumentException("");
    }
    return id;
  }

  public static List<Long> extractIdsAndAssertTypes(List<String> globalIds, String expectedType) {
    List<Long> ids = new ArrayList<>();
    for (String globalId : globalIds) {
      ids.add(extractIdAndAssertType(globalId, expectedType));
    }
    return ids;
  }

  public static GlobalId fromGlobalId(String globalId) {
    String decoded = new String(D.decode(globalId), StandardCharsets.UTF_8);
    String[] parts = decoded.split(":", 2);
    long id = Long.parseLong(parts[1]);
    return new GlobalId(parts[0], id);
  }
}
