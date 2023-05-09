package nl.jrdie.quotebookapp.entities;

import jakarta.persistence.*;
import java.util.List;

@Table(name = "quotee")
@Entity
public class QuoteeEntity {

  @Id @GeneratedValue private Long id;

  @Column(nullable = false)
  private String name;

  @ManyToMany(targetEntity = QuoteEntity.class, fetch = FetchType.EAGER,mappedBy = "quotees")
  private List<QuoteEntity> quotes;

  public Long getId() {
    return id;
  }

  public QuoteeEntity setId(Long id) {
    this.id = id;
    return this;
  }

  public String getName() {
    return name;
  }

  public QuoteeEntity setName(String name) {
    this.name = name;
    return this;
  }
}
