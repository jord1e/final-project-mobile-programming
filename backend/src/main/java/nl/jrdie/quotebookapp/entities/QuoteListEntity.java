package nl.jrdie.quotebookapp.entities;

import jakarta.persistence.*;
import java.time.OffsetDateTime;
import java.util.List;

@Table(name = "quote_list")
@Entity
public class QuoteListEntity {

  @Id @GeneratedValue private Long id;

  @Column(nullable = false)
  private String name;

  @Column(nullable = false)
  private OffsetDateTime createdAt;

  @ManyToMany(targetEntity = QuoteEntity.class, fetch = FetchType.EAGER)
  private List<QuoteEntity> quotes;

  public Long getId() {
    return id;
  }

  public QuoteListEntity setId(Long id) {
    this.id = id;
    return this;
  }

  public String getName() {
    return name;
  }

  public QuoteListEntity setName(String name) {
    this.name = name;
    return this;
  }

  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }

  public QuoteListEntity setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
    return this;
  }

  public List<QuoteEntity> getQuotes() {
    return quotes;
  }

  public QuoteListEntity setQuotes(List<QuoteEntity> quotes) {
    this.quotes = quotes;
    return this;
  }
}
